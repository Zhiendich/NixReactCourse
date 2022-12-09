import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
import { addGoods } from "../store/actions-creator/goods";

class AddGoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      weight: "",
      description: "",
      category: "",
    };
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
  addNewGood(e) {
    if (
      this.state.title !== "" &&
      this.state.weight !== "" &&
      this.state.description !== "" &&
      this.state.category !== ""
    ) {
      this.props.addGoods({
        id: v4(),
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
    this.props.setAddGoodFlag(false);
  }
  render() {
    return (
      <div className="flex flex-col  max-w-[300px] border-l-2 border-[left] border-[#3475D2] pl-5">
        <h2 className="mb-3 text-[20px]">Добавить товар</h2>
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
            onClick={this.addNewGood.bind(this)}
            className="bg-[#3475D2] text-white p-3 rounded-2xl max-w-[100px]"
          >
            Добавить
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
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => ({
  addGoods: (newGood) => dispatch(addGoods(newGood)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGoodForm);
