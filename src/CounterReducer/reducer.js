export const reducer = (state, action) => {
 
  if(action.type === 'INCREASING_NUM_VALUE'){

          return {...state, num:state.num + 1}

  }

 throw new Error(`No Matching "${action.type}" - action type`)

 
}