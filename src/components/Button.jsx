function MyButton({title}) {
    return (
      <button>
        {title}
      </button>
    );
  }
  
  export default function MyApp(){
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton title='Add to cart'/>
        <MyButton title='Find out more'/>
      </div>
    );
  }
  