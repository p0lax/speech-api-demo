import { Select, Textarea, Flex } from '@chakra-ui/react';
import speechApi from './services/speech.service';

import classes from './App.module.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText( event.target.value.trim());
    say();
  };

  const say = () => {
    speechApi.say(text);
  }

  const onChangeVoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.value.trim();
    const voice = speechApi.getVoices().find((v) => v.name === name);
    if (voice) {
      speechApi.setVoice(voice);
      say();
    }
  }

  return (
    <div className={classes.app}>
      <Flex direction="column">
        <Select placeholder="Select option" onChange={onChangeVoice}>
          {speechApi.getVoices().map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </Select>
        <Textarea  onChange={onChangeText} />
      </Flex>
    </div>
  );
}

export default App;
