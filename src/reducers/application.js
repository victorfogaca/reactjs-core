const INITIAL_STATE =
          {
              loggedIn:true,
              user:{name:'Victor'},
              menu:[],
          };

function application(state=INITIAL_STATE,action)
{
    switch (action.type)
    {
        case "SET_ACCESS":
            return {...state,loggedIn:true,access:action.data,menu:action.data.access.menu};
        case "SET_MENU":
            return {...state,menu:action.data};
        case "LOG_OUT":
            return {...state,loggedIn:false,access:{},menu:[]};
        default:
            return state;
    }
}

export default application;