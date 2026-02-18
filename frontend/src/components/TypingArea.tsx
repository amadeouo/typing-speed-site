import { observer } from "mobx-react-lite";
import typingStore from "@/store/typing.store.ts";
// import { Button } from "@/components/ui/button.tsx";

export const TypingArea = observer(() => {
  return (
    <main className='relative text-white mt-5' onClick={() => document.getElementById('hidden-input')?.focus()}>
      <div>
        <input
          className="absolute opacity-0 pointer-events-none"
          id="hidden-input"
          type='text'
          autoFocus
          value={typingStore.userInput}
          onChange={(e) => typingStore.handleInput(e.target.value)}
        />
        <div className="font-sans text-4xl leading-15 sm:text-6xl sm:leading-20">
          {typingStore.text.split("").map((char, index) => {
            const isTyped = index < typingStore.userInput.length;
            const isCorrect = isTyped && typingStore.userInput[index] === char;
            const isCurrent = index === typingStore.currentCharIndex;

            let charClass = "";
            if (isTyped) {
              charClass = isCorrect
                ? "text-green-500"
                : "text-red-500 bg-red-500/20 underline decoration-red-500 underline-offset-4";
            }

            return (
              <span
                key={index}
                className={`relative transition-colors duration-100 ${charClass} ${isCurrent ? "text-neutral-0" : ""}`}
              >
                {isCurrent && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 animate-pulse" />
                )}
                {char}
              </span>
            );
          })}
        </div>
      </div>
      {/*<div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-noise bg-repeat">*/}
      {/*  <Button className='bg-blue-500 w-auto'>Start Typing Text</Button>*/}
      {/*  <span className=''>Or click the text and start typing</span>*/}
      {/*</div>*/}
    </main>

  )
})