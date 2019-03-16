const ukHardKit = [{
    keystroke: "Q",
    id: "ping",
    url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Korg%20ER-1/37[kb]ping.wav.mp3"
  }, {
    keystroke: "W",
    id: "pong",
    url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Korg%20ER-1/15[kb]pong.wav.mp3"
  }, {
    keystroke: "E",
    id: "high-hat-5",
    url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/CASIO%20PT-30/34[kb]pt30-hh5.aif.mp3"
  }, {
    keystroke: "A",
    id: "UK_KICK-lowthud",
    url: "https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/UK%20Hard%20Kit/78[kb]UK_KICK-lowthud.WAV.mp3"
  }, {
    keystroke: "S",
    id: "UK_CRASH",
    url: "https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20(FULL%20KITS)/UK%20Hard%20Kit/167[kb]UK_CRASH.WAV.mp3"
  }, {
    keystroke: "D",
    id: "UK_RIM",
    url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/UK%20Hard%20Kit/39[kb]UK_RIM.WAV.mp3"
  }, {
    keystroke: "Z",
    id: "hrcsnare-10",
    url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Lots%20of%20random%20SNARES/38[kb]hrcsnare-10.wav.mp3"
  }, {
    keystroke: "X",
    id: "cymbnoiz",
    url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Korg%20ER-1/166[kb]cymbnoiz.wav.mp3"
  }, {
    keystroke: "C",
    id: "open-high-hat-6",
    url: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/Choosy%20House%20Kit/41[kb]choosy-house-OpenHihat06.wav.mp3"
  }];
  
  
  
  
  class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.playClip = this.playClip.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(event) {
      if ((event.key == this.props.keystroke) || event.key == this.props.keystroke.toLowerCase()) {
        console.log(event);
        this.playClip(event);
      }
    }
    playClip(event) {
      console.log(event.target.textContent == this.props.keystroke);
      console.log(typeof event.target.textContent);
      let clip = document.getElementById(this.props.keystroke);
      let display = document.getElementById('display');
      display.innerHTML = this.props.id;
      clip.currentTime = 0;
      clip.play();
    }
    render() {
      console.log(this.props.keystroke);
      return (
        <div className="drum-pad" id={this.props.id} onClick={this.playClip}>
          <audio className="clip" id={this.props.keystroke} src={this.props.url}></audio>{this.props.keystroke}
        </div>
      );
    }
  }
  
  //console.log(ukHardKit.map((x, y, z) => { return z[y].keystroke}));
  
  class DrumMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      var pads = ukHardKit.map((x, y, z) => {
        return (<DrumPad id={z[y].id} url={z[y].url} keystroke={z[y].keystroke} key={y} />);
      });
      //console.log(pads);
      return (
        <div className="row">
        <div id="drum-machine">{pads}</div><div id="display"></div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<DrumMachine />, document.getElementById("root"));