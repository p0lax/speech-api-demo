import { debounce } from "lodash";

<<<<<<< HEAD
const DEBOUNCE_TIMEOUT = 1000
=======
>>>>>>> 376b85b73cf9738fb42d7d9f34f017984c5fca4c

class SpeechAPI {
  selectedVoice?: SpeechSynthesisVoice; 
  synth: SpeechSynthesis;

  constructor(synth: SpeechSynthesis) {
    this.synth = synth;
  }

  say = debounce((text: string) => {
    const utter = new SpeechSynthesisUtterance(text);
    utter.pitch = 1;
    utter.rate = 1;
    utter.volume = 1;
    if (this.selectedVoice) {
      utter.voice = this.selectedVoice;
    }
    this.synth.speak(utter);
<<<<<<< HEAD
  }, DEBOUNCE_TIMEOUT)
=======
  }, 1000)
>>>>>>> 376b85b73cf9738fb42d7d9f34f017984c5fca4c

  setVoice(voice: SpeechSynthesisVoice) {
    this.selectedVoice = voice
  }

  getVoices() {
    return this.synth.getVoices();
  }
}

export default new SpeechAPI(window.speechSynthesis);