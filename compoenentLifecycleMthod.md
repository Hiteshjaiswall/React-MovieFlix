so compenets have a life cyce so it is the lifecycle of compoenet from the moment they are born till there death and it is importana because we would be able to write the code more effectively also deal with the sideeffect side effect are the actions that are not pridicted it maybe from the outside which is outside of react lets say that the react app wanats to interact witht the browser it is side effect lets say you chose to manupulate the dom using the dom native metod (get document by id and all) it is also cosnider a side effect if you fecting a data using the api it si also consider aas side effect 



there are rules in the react how we can perform there side effect 



so we will learn different phases of the compoenent lifecycle 


lifecycele methods involved in different phases 


order in which lifecycle methods ara called during execution 


how and where to perform side eefects 

Differnet phase are moutning updating unmounting and error handeling 

so there are 4 phases with the lifecycle of the compoenets

MOUTNING PHASE :

so lets see what is mounting 


constructor()  (called when ever a new method is created make state or bind it is only place here we can modify the state other that the constructor we need to use the setState to change the state and react says you should avoid any side effects becuase it can bugs int he application also setstate should avoided in the constructor 
)



StaticgetDerivedStateFromProps()  (it is rarely used so we wont dicuss it that much you can set the state basse on the props that are coming to your react componenet it si sued just before the render fucntion no side effect should be performed in this fucntion also  )


render()(it is only rquire function for the claass function becuase it is the only function that return the jxs so it is required nothing will happen with out the render function there is a rule tat you cannot perform any sideeffect inside the render function becauae render fucntions should be pure functions it should return the same outpur for the same functions no sideeffect should be performened insidethe render functions )

conpoenetDidMount()(this will get envoked when the cmpoenet is mounted on the dom it has allready been mounted so this fuction will be invoked we can perform anysdieeffect here use api to fetch data it can perfeorm any side effect if we want to interat with the aoi it is the place we also can set state in this )
