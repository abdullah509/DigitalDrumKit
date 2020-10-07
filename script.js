function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const sounds = [
{
  key: 'Q',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  key: 'W',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  key: 'E',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  key: 'A',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  key: 'S',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  key: 'D',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  key: 'Z',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  key: 'X',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  key: 'C',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];




const App = () =>


React.createElement("div", { id: "display", className: "display" },
React.createElement("h1", null, "Play a sound"),
sounds.map((sound, idx) =>
React.createElement(DrumPad, { text: sound.key, key: idx, audio: sound.url })));




class DrumPad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",










    () => {
      console.log(this.audio.current);

      this.audio.current.play();

      const id = this.audio.current.id;

      const parent = this.audio.current.parentNode;
      parent.classList.add('active');

      const display = parent.parentNode;
      display.querySelector('h1').innerText = `${id} is playing`;
    });this.audio = React.createRef();}componentDidMount() {this.audio.current.addEventListener('ended', e => {const parent = e.target.parentNode;parent.classList.remove('active');});}

  render() {
    const { text, audio } = this.props;

    return (
      React.createElement("div", { className: "drum-pad", onClick: this.playSound, id: `drum-${text}` },
      text,
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));



  }}


document.addEventListener('keydown', e => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    audio.play();
  }
});





ReactDOM.render(React.createElement(App, null), document.getElementById('drum-machine'));