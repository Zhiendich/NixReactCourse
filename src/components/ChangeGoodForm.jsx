import React from "react";
import { connect } from "react-redux";
import { changeGoods } from "../store/actions-creator/goods";

class ChangeGoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      weight: "",
      description: "",
      category: "",
    };
  }
  componentDidMount() {
    const find = this.props.goods.find(
      (good) => good.id === this.props.changeId
    );
    if (find) {
      this.setState({
        title: find.title,
        weight: find.weight,
        description: find.description,
        category: find.category,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.changeId !== this.props.changeId) {
      const find = this.props.goods.find(
        (good) => good.id === this.props.changeId
      );
      if (find) {
        this.setState({
          title: find.title,
          weight: find.weight,
          description: find.description,
          category: find.category,
        });
      }
    }
  }
  changeTitleHandler(e) {
    this.setState({ title: e.target.value });
  }
  changeWeightHandler(e) {
    this.setState({ weight: e.target.value });
  }
  changeDescriptionHandler(e) {
    this.setState({ description: e.target.value });
  }
  changeCategoryHandler(e) {
    this.setState({ category: e.target.value });
  }
  changeGoodHandler() {
    if (
      this.state.title !== "" &&
      this.state.weight !== "" &&
      this.state.description !== "" &&
      this.state.category !== ""
    ) {
      this.props.changeGoods({
        id: this.props.changeId,
        title: this.state.title,
        weight: this.state.weight,
        description: this.state.description,
        category: this.state.category,
      });
      this.setState = {
        title: "",
        weight: "",
        description: "",
        category: "",
      };
      this.closeFormHandler();
    } else {
      alert("Заполните все поля!");
    }
  }
  closeFormHandler() {
    this.props.setChangeGoodFlag(false);
  }
  render() {
    return (
      <div className="flex flex-col  max-w-[300px] border-l-2 border-[left] border-[#3475D2] pl-5">
        <h2 className="mb-3 text-[20px]">Изменить товар</h2>
        <input
          value={this.state.title}
          onChange={this.changeTitleHandler.bind(this)}
          className="outline-none p-2 border-[2px] border-[#3475D2] mb-3"
          type="text"
          placeholder="title"
        />
        <input
          value={this.state.weight}
          onChange={this.changeWeightHandler.bind(this)}
          className="outline-none p-2 border-[2px] border-[#3475D2] mb-3"
          type="text"
          placeholder="weight"
        />
        <input
          value={this.state.description}
          onChange={this.changeDescriptionHandler.bind(this)}
          className="outline-none p-2 border-[2px] border-[#3475D2] mb-3"
          type="text"
          placeholder="description"
        />
        <input
          value={this.state.category}
          onChange={this.changeCategoryHandler.bind(this)}
          className="outline-none p-2 border-[2px] border-[#3475D2] mb-3"
          type="text"
          placeholder="category"
        />
        <div className="flex ">
          <button
            onClick={this.changeGoodHandler.bind(this)}
            className="bg-[#3475D2] text-white p-3 rounded-2xl max-w-[100px]"
          >
            Изменить
          </button>
          <button
            onClick={this.closeFormHandler.bind(this)}
            className="bg-[#3475D2] text-white p-3 rounded-2xl max-w-[100px] ml-2"
          >
            Закрыть
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    goods: state.goods.goods,
    changeId: ownProps.changeId,
  };
};
const mapDispatchToProps = (dispatch) => ({
  changeGoods: (changeGood) => dispatch(changeGoods(changeGood)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeGoodForm);
