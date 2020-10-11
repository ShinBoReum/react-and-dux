import { connect } from "react-redux";
import Counter from "./Counter";

//리덕스 상태를 컴포넌트 속성에 맵핑
function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}
/*
    이 코드의 주 목적은 모든 리덕스에 특정적인 후크를 리액트에서 사용할 수 있는 무언가로 바꾸는 것.
    모든 리덕스 후크를 mapStateToProps 와 mapDispatchToProps를 통해 쉽게 소비할 수 있는 속성의 형태로 바꿔 제공.
    mapStateToProps는 모든 스토어 갱신 작업을 구독하므로, 스토어에 어떤 변경이 일어나도 호출된다. 그러면 컴포넌트의 속성으로 전달할 
    스토어 데이터를 담는 객체를 리턴. countValue라는 속성을 담는 객체로서, 이 속성은 스토어의 현재 count 속성 값을 나타낸다.
*/

// 액션
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };

// 리덕스 액션을 컴포넌트 속성에 매핑
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function () {
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            return dispatch(decreaseAction);
        }
    };
}
/*
    mapDispatchToProps 이 함수는 컴포넌트가 스토어를 변경시키는 액션에 디스패치 가능한 두 함수의 이름을 담은 객체를 리턴한다.
    increaseCount 함수는 increase 유형의 액션에 디스패치 해준다. decreaseCount 함수는 decrease 유형의 액션에 디스패치 해준다.
*/


// HOC (Higher Order Component 고차원 컴포넌트: 기존 컴포넌트를 래핑하고 HOC 고유의 기능을 추가로 주입함으로써 그 컴포넌트의 기능성을 확장시키는 이로간된 방법을 제공)
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

/*
    connect 위 에서 생성한 함수들을 어떤 컴포넌트든 이들 속성을 받아 사용할수 있게 보장

*/

export default connectedComponent;


