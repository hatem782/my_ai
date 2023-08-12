import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { useSpeechSynthesis } from "react-speech-kit";

function Speech() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const { speak, voices } = useSpeechSynthesis({
    onEnd: () => {
      SpeechRecognition.startListening();
    },
  });
  const [text, setText] = useState("");

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  //micro is desactivated => open micro
  useEffect(() => {
    if (!listening && transcript === "") {
      SpeechRecognition.startListening();
    }

    if (!listening && transcript !== "") {
      speak({
        text: text,
        pitch: 2,
        voice: voices[108],
      });
    }
  }, [listening, text]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

export default Speech;
