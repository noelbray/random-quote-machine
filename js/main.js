// function colorChanger() {const rgbNumber = Math.floor(Math.random() * 256);
// const red = rgbNumber;
// const blue = rgbNumber;
// const green = rgbNumber;
// const randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
// document.querySelector("body").style.backgroundColor = randomColor;
// document.querySelector("body").style.color = "rgb(" + 1/red + ", " + 1/green +", " + 1/blue + ")";
// }
let quoteComponentStyle =  {
  backgroundColor: "rgb(255, 255, 255)",
  border: "2px solid black",
  borderRadius: 20,
  margin: "50px 25% 0",
  minHeight: 50,
  position: "relative",
  padding: 25,
  fontWeight: "bold"
}
// Object.isExtensible(quoteComponentStyle);
let textComponentStyle = {
  // border: "1px solid green",
  textAlign: "center",
  fontStyle: "italic",
  fontSize: 19
}
let authorComponentStyle = {
  // border: "1px solid green",
  textAlign: "right",
  marginBottom: 60,
  fontStyle: "italic",
  fontSize: 17
}
let newQuoteComponentStyle = {
  position: "absolute",
  right: 25,
  bottom: 25,
  cursor: "pointer",
  backgroundColor: "white",
  border: "2px solid black",
  borderRadius: 10,
  padding: "7px 15px",
  fontStyle: "italic",
  fontFamily: "inherit",
  fontSize: 16,
  fontWeight: "inherit"
  // transform: "skewX(180deg)"
}
let tweetComponentStyle = {
  position: "absolute",
  left: 25, 
  bottom: 25,
  color: "black",
  fontStyle: "italic",
  fontSize: 16,
  textDecoration: "none",
  border: "2px solid black",
  borderRadius: 10,
  padding: "7px 15px"
}

class RandomQuoteMachine extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      randomIndex: Math.floor(Math.random() * quotesArray.length),
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256)
    }
    this.rgbGenerator = this.rgbGenerator.bind(this);
    this.randomIndexGenerator = this.randomIndexGenerator.bind(this);
  }
  // componentDidMount() {
  //   const body = document.querySelector("body");
  //   const newQuote = document.querySelector("#new-quote");
  //   newQuote.addEventListener(
  //     "click",
  //     () => {
  //       body.style.backgroundColor = "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")"; 
  //     }
  //   )
  // }
  
rgbGenerator(e) {
const body = document.querySelector("body");
const newQuote = document.querySelector("#new-quote");
const tweet = document.querySelector("#tweet-quote");
this.setState(state =>
  {
    return {red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256)}
  }
);
// quoteComponentStyle = Object.assign({}, quoteComponentStyle, {backgroundColor: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")"});
  textComponentStyle = Object.assign({}, textComponentStyle, 
{
  // color: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")"
  color: "rgb(" + (255 - this.state.red) + ", " + (255 - this.state.green) + ", " +(255 - this.state.blue) + ")"
});
  authorComponentStyle = Object.assign({}, authorComponentStyle,
{color: "rgb(" + (255 - this.state.red) + ", " + (255 - this.state.green) + ", " + (255 - this.state.blue) + ")"});
  newQuoteComponentStyle = Object.assign({}, newQuoteComponentStyle, {border: "2px solid rgb(" + (255 - this.state.red) + ", " + (255 - this.state.green) + ", " + (255 - this.state.blue) + ")", 
// color: (this.state.red + this.state.green + this.state.blue) > 384 ? "white" : "black"
// rgb color inversion:
color: "rgb(" + (255 - this.state.red) + ", " + (255 - this.state.green) + ", " + (255 - this.state.blue) + ")",
// outlineColor: "rgb(" + (255 - this.state.red) + ", " + (255 - this.state.green) + ", " + (255 - this.state.blue) + ")"
});
  tweetComponentStyle = Object.assign({}, tweetComponentStyle, {
    // backgroundColor: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")", 
// color: (this.state.red + this.state.green + this.state.blue > 384 ? "white" : "black")
    border: "2px solid rgb(" + (255 - this.state.red) + ", " + (255 - this.state.green) + ", " + (255 - this.state.blue) + ")",
color: "rgb(" + (255 - this.state.red) + ", " + (255 - this.state.green) + ", " + (255 - this.state.blue) + ")"});
// quoteComponentStyle.backgroundColor = "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")";
// e.parentElement.backgroundColor = "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")";
// test to see if it was working before writing more code.     
body.style.backgroundColor = "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")";
}
  
  randomIndexGenerator() {
    // random quotes
    let randomNumber = Math.floor(Math.random() * 7);
    if (this.state.randomIndex !== randomNumber) {
      this.setState(
        {
          randomIndex: randomNumber
        }
      )  
    } else {
      this.randomIndexGenerator();
    }

    // Experiment: cycling quotes:
    // const lastIndex = quotesArray.length - 1;
    // this.setState(
    //   state => {
    //     return state.randomIndex === lastIndex ? {randomIndex: 0} : {randomIndex: state.randomIndex + 1}
    //   }
    // );
    this.rgbGenerator();
  }
  render() {
    
    return (
      <div 
        id="quote-box"
        style={quoteComponentStyle}>
        <TextBox quote={quotesArray[this.state.randomIndex].quote}/>
        <Author origin={quotesArray[this.state.randomIndex].origin}/>
        <NewQuote onclick={this.randomIndexGenerator}
          /*rgb={this.rgbGenerator}*//>
        <Tweet />
      </div>
    )
  }
}

class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p 
        id="text"
        style={textComponentStyle}>
        {this.props.quote}
      </p>)
    {/* remember that in js you can't use the hyphen for variable names*/}
  }
}
function Author (props) {
  return (
    <p 
      id="author"
      style={authorComponentStyle}>
    {props.origin}
  </p>
  )
}
function NewQuote (props) {
  return (
    <button 
      id="new-quote"
      type="button"
      style={newQuoteComponentStyle}
      onClick={ props.onclick/*props.rgb*/}>
      New Quote
    </button>
  )
}
function Tweet() {
  return (
    <a 
      id="tweet-quote"
      href="twitter.com/intent/tweet"
      style={tweetComponentStyle}>
      Tweet
    </a>
  )
}

const quotesArray = [
  {
    quote: "“We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.”",
    origin: "– Declaration of Independence, 1776"
  },
  {
    quote: "“I can only say that there is not a man living who wishes more sincerely than I do, to see a plan adopted for the abolition of slavery.”",
    origin: "– George Washington, Letter to Robert Morris, 1786"
  },
  {
    quote:"“The ordaining of laws in favor of one part of the nation, to the prejudice and oppression of another, is certainly the most erroneous and mistaken policy. An equal dispensation of protection, rights, privileges, and advantages, is what every part is entitled to, and ought to enjoy.”",
    origin: "– Benjamin Franklin, Emblematical Representations, ca. 1774" 
  },
  {
    quote: "“The moment the idea is admitted into society that property is not as sacred as the laws of God, and that there is not a force of law and public justice to protect it, anarchy and tyranny commence.”",
    origin: "– John Adams, A Defence of the Constitutions of the Government of the United States of America, 1787"
  },
  {
    quote: "“Government is instituted to protect property of every sort; as well that which lies in the various rights of individuals, as that which the term particularly expresses. This being the end of government, that alone is a just government which impartially secures to every man whatever is his own.”",
    origin: "– James Madison, Essay on Property, 1792"
  },
  {
    quote: "“A wise and frugal government, which shall leave men free to regulate their own pursuits of industry and improvement, and shall not take from the mouth of labor the bread it has earned — this is the sum of good government.”",
    origin: "– Thomas Jefferson, First Inaugural Address, 1801"
  },
  {
    quote: "“Without liberty, law loses its nature and its name, and becomes oppression. Without law, liberty also loses its nature and its name, and becomes licentiousness.”",
    origin: "– James Wilson, Of the Study of the Law in the United States, 1790"
  }
]

const root = document.querySelector("#root");
ReactDOM.render(<RandomQuoteMachine />, root)
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
