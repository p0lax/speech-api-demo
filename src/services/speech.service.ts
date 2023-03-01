import { debounce } from "lodash";

const DEBOUNCE_TIMEOUT = 1000

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
  }, DEBOUNCE_TIMEOUT)

  setVoice(voice: SpeechSynthesisVoice) {
    this.selectedVoice = voice
  }

  getVoices() {
    return this.synth.getVoices();
  }
}

export default new SpeechAPI(window.speechSynthesis);