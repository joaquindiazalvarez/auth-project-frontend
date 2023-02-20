import '../App.css';
import cake2 from '../assets/cake2.png'

export function Home() {
  return (
    <div className="text-center mt-5">
      <h1>Hello!, want to know </h1>
      <img src={cake2}></img>
      <h1>How long is left for your birthday?</h1>
      <h1>Just Login or register!</h1>
    </div>
  );
}

