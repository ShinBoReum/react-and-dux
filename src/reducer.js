//리듀서
function counter(state, action) {
    if (state === undefined) {
        return { count: 0 };
    }

    var count = state.count;

    switch (action.type) {
        case "increase" :
            return { count: count + 1 };
        case "decrease" :
            return { count: count - 1 };
        default :
            return state;
    }
}

export default counter;

/*
    상태가 비어있다면 0으로 초기화 
    increase 와 decrease 라는 두가지 액션 유형을 다룬다.
    액션 유형이 increase 라면 count 값을 1만큼 증가
    액션 유형이 decrease 라면 count 값을 1만큼 감소
*/