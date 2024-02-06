import './App.css'
import { ChangeEvent, useState } from 'react';
const App: React.FC = () => {
  let originalInput: string;
  let possiblePalindrome: string;
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");
  const [notPalindrome, setNotPalindrome] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [isFalse, setIsFalse] = useState(false);
  const searchHandler: React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    const inputOne = e.target as HTMLInputElement;
    setUserInput(inputOne.value);
    setNotPalindrome("");
    setPalindrome("");
    setIsTrue(false);
    setIsFalse(false);
  }
  const InputHandler = () => {
    originalInput = userInput;
    possiblePalindrome = userInput.toLowerCase().replace(/[\s,!@#$%^&*-.?]/g, '');
    setUserInput("");
    palindromeChecker()
  }

  const palindromeChecker = () => {
    if (possiblePalindrome === "") return console.log("no input");
    const reversedInput = [...possiblePalindrome].reverse().join("");
    if (possiblePalindrome === reversedInput) {
      setPalindrome(originalInput);
      setIsTrue(true);
    }
    else {
      setNotPalindrome(originalInput);
      setIsFalse(true);
    }
  }
  return (
    <>
      <main>
        <h1>PalindromeChecker</h1>
        <p>Humankind has always been fascinated by palindromes. Fex. how can a word be the same no matter if it's read forwards or backwards? Countless manhours have been wasted figuring out if a word is a palindrome or not. We think there must be a better way. Our best minds have been on this problem for ages and today I'm pleased to announce that we have found a solution!  </p>
        <p>Let me be the first to introduce you to PalindromeChecker3000!</p>
        <div className="palindromeHolder">
          <div className='green' style={isTrue ? { backgroundColor: "greenyellow" } : { backgroundColor: "darkred" }}></div>
          <h2>PalindromeChecker3000</h2>
          <div className="secondHolder">
            <div className="searchHolder">
              <input type="text" id="palindromeInput" name="palindromeInput" value={userInput} onChange={searchHandler} onKeyDown={(e) => { if (e.key === "Enter") InputHandler() }} placeholder='click here' />
              <p className="palindrome" style={isTrue ? { display: "block", color: "greenyellow" } : { display: "none" }}>"{palindrome}" is a palindrome!</p>
              <p className="noPalindrome" style={isFalse ? { display: "block", color: "crimson" } : { display: "none" }}>"{notPalindrome}" is not a palindrome!</p>
            </div>
            <button onClick={() => InputHandler()}>Check it!</button>
          </div>
        </div>
        <p>Welcome to the future!</p>
      </main>
    </>
  )
}

export default App

