import React from "react";
import { connect } from "react-redux";
import { deleteGoods } from "../store/actions-creator/goods";

class Good extends React.Component {
  removeGood() {
    const { deleteGoods } = this.props;
    deleteGoods(this.props.id);
  }
  changeGood() {
    if (
      this.props.setChangeGoodFlag !== undefined &&
      this.props.setChangeId !== undefined &&
      this.props.setAddGoodFlag !== undefined
    ) {
      this.props.setAddGoodFlag(false);
      this.props.setChangeGoodFlag(true);
      this.props.setChangeId(this.props.id);
    }
  }
  render() {
    return (
      <div className="border-[2px]  min-w-[290px] h-[200px] mt-[20px] p-5 mr-5 ">
        {this.props.isItemCreating ? (
          <h1>Товар создается... </h1>
        ) : this.props.isDeleteLoading &&
          this.props.currentID === this.props.id ? (
          <h1>Товар удаляется... </h1>
        ) : this.props.isChangeLoading &&
          this.props.currentID === this.props.id ? (
          <h1>Товар изменяется... </h1>
        ) : (
          <div className="flex flex-col h-full justify-between">
            <div>
              <h1 className="text-[20px]">{this.props.title}</h1>
              <h1>{this.props.weight}</h1>
              <h1>{this.props.description}</h1>
              <h1>{this.props.category}</h1>
            </div>
            <div className="flex text-[#3475D2] text-[18px]">
              <h1
                onClick={this.changeGood.bind(this)}
                className="cursor-pointer"
              >
                Edit
              </h1>
              <h1
                onClick={this.removeGood.bind(this)}
                className="ml-4 cursor-pointer"
              >
                Remove
              </h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isDeleteLoading: state.goods.isDeleteLoading,
    isChangeLoading: state.goods.isChangeLoading,
    currentID: state.goods.currentID,
    id: ownProps.id,
    title: ownProps.title,
    weight: ownProps.weight,
    description: ownProps.description,
    category: ownProps.category,
    isItemCreating: ownProps.isItemCreating,
    setChangeGoodFlag: ownProps.setChangeGoodFlag,
    setChangeId: ownProps.setChangeId,
    setAddGoodFlag: ownProps.setAddGoodFlag,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteGoods: (id) => dispatch(deleteGoods(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Good);
