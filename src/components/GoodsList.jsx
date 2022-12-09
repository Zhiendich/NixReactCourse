import React from "react";
import { connect } from "react-redux";
import { fetchGoods } from "../store/actions-creator/goods";
import AddGoodForm from "./AddGoodForm";
import ChangeGoodForm from "./ChangeGoodForm";
import Good from "./Good";

class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addGoodFlag: false,
      changeGoodFlag: false,
      changeId: "",
      filteredGoods: [],
      filterInput: "",
      field: "",
    };
  }
  componentDidMount() {
    this.props.fetchGoods();
  }

  setChangeGoodFlag = (arg) => {
    this.setState({
      changeGoodFlag: arg,
    });
  };
  setChangeId = (arg) => {
    this.setState({
      changeId: arg,
    });
  };
  setAddGoodFlag = (arg) => {
    this.setState({
      addGoodFlag: arg,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.goods !== prevProps.goods) {
      this.setState({ filteredGoods: this.props.goods });
    }
    if (this.state.filterInput !== prevState.filterInput) {
      this.setState({
        filteredGoods: this.props.goods.filter((good) =>
          good.title
            .toLowerCase()
            .includes(this.state.filterInput.toLowerCase())
        ),
      });
    }
    if (this.state.field !== prevState.field) {
      this.setState({
        filteredGoods: this.state.filteredGoods.sort((a, b) =>
          b[this.state.field] > a[this.state.field] ? -1 : 1
        ),
      });
    }
  }
  filterInputHandler(e) {
    this.setState({ filterInput: e.target.value });
  }
  sortByField(e) {
    this.setState({ field: e.target.value });
  }
  addGoodHandler() {
    this.setState({
      changeGoodFlag: false,
      addGoodFlag: true,
    });
  }
  render() {
    if (this.props.isLoading) {
      return (
        <h1 className="text-center mt-[45vh] text-[30px]">Идет загрузка...</h1>
      );
    }
    if (this.props.isError) {
      return <h1>{this.props.isError}</h1>;
    }
    return (
      <div className=" max-w-[1280px] p-4 mx-auto flex">
        <div>
          <input
            value={this.state.filterInput}
            onChange={this.filterInputHandler.bind(this)}
            type="text"
            placeholder="Search for goods"
            className="border-[3px] border-[#3475D2] p-2 outline-none"
          />
          <select
            className="border-[2px] border-[#3475D2] p-1 outline-none ml-4 "
            value={this.state.field}
            onChange={this.sortByField.bind(this)}
          >
            <option>title</option>
            <option>weight</option>
            <option>description</option>
            <option>category</option>
          </select>
          <div className="flex flex-wrap ">
            {this.state.filteredGoods.length !== 0 ? (
              this.state.filteredGoods.map((good) => (
                <Good
                  key={good.id}
                  id={good.id}
                  category={good.category}
                  description={good.description}
                  title={good.title}
                  weight={good.weight}
                  setChangeGoodFlag={this.setChangeGoodFlag}
                  setChangeId={this.setChangeId}
                  setAddGoodFlag={this.setAddGoodFlag}
                />
              ))
            ) : (
              <h1 className="text-[30px] my-[30px] ">Нет товаров</h1>
            )}
            {this.props.isAddLoading && (
              <Good
                id=""
                category=""
                description=""
                title=""
                weight=""
                isItemCreating={this.props.isAddLoading}
              />
            )}
          </div>
          <button
            onClick={this.addGoodHandler.bind(this)}
            className="bg-[#3475D2] text-white p-4 rounded-2xl mt-4 mb-4"
          >
            Добавить
          </button>
        </div>
        {this.state.addGoodFlag && (
          <AddGoodForm setAddGoodFlag={this.setAddGoodFlag} />
        )}
        {this.state.changeGoodFlag && (
          <ChangeGoodForm
            setChangeGoodFlag={this.setChangeGoodFlag}
            changeId={this.state.changeId}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    goods: state.goods.goods,
    isError: state.goods.isError,
    isLoading: state.goods.isLoading,
    isAddLoading: state.goods.isAddLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchGoods: () => dispatch(fetchGoods()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
