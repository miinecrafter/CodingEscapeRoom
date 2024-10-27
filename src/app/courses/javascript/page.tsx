"use client"
import SpookyCharacterDialogue from "@/components/character-dialogue";
import Component from "@/components/js-challenges";
import { Popup } from "@/components/popup";
import StreamTextArea from "@/components/textarea-stream";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react'


export default function Javascript() {

    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < 7) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    };

    const spookyPhrases = [
        "You recently moved into a new house. Everything is great and you love everything about it. Except for one door that your parents always keep locked.",
        "You're not allowed to go in there, until one day you do...",
    ]

    const [isButtonActive, setIsButtonActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsButtonActive(true);
        }, 12000); // 12 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {currentStep === 0 && (
                <div style={{
                    backgroundImage: 'url("/images/og-js-background.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh',
                }}
                    className="w-screen flex flex-col items-center justify-center p-4">
                    <StreamTextArea spookyPhrases={spookyPhrases} />
                    <Button
                        className="mt-4 rounded-lg"
                        onClick={handleNext}
                        disabled={!isButtonActive}
                    >
                        Next
                    </Button>
                </div>


            )}
            {currentStep === 1 && (
                <div
                style={{
                  backgroundImage: 'url("/images/js-background.jpg")', 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh', 
                }}
                className="w-screen flex flex-col items-center p-4"
              >
                <div className="w-full flex justify-center">
                  <SpookyCharacterDialogue
                    text="Thee-Bug: HAHAHA! You walked into my secret room and you'll never be able to get out!"
                    imageSrc={'/images/js-monster.jpg'}
                  />
                </div>
                
                <div className="w-full flex justify-center mt-4"> 
                  <Button
                    className="rounded-lg"
                    onClick={handleNext}
                    disabled={!isButtonActive}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {currentStep === 2 && (
                <div
                style={{
                  backgroundImage: 'url("/images/js-background.jpg")', 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh', 
                }}
                className="w-screen flex flex-col items-center p-4"
              >
                <div className="w-full flex justify-center">
                  <SpookyCharacterDialogue
                    text="Helper Pup: Hey there, I can help you get out! Just go up to the screen and complete the challenges."
                    imageSrc={'/images/js-helper.jpg'}
                    isLeft={false}
                  />
                </div>
                
                <div className="w-full flex justify-center mt-4"> 
                  <Button
                    className="rounded-lg"
                    onClick={handleNext}
                    disabled={!isButtonActive}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {currentStep === 3 && (
                <div
                style={{
                  backgroundImage: 'url("/images/js-background.jpg")', 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh', 
                }}
                className="w-screen flex flex-col items-center p-4"
              >
                <div className="w-full flex justify-center">
                  <SpookyCharacterDialogue
                    text="Thee-Bug: HAHAHA! No one's ever been able to complete my challenges. You have no chance!"
                    imageSrc={'/images/js-monster.jpg'}
                  />
                </div>
                
                <div className="w-full flex justify-center mt-4"> 
                  <Button
                    className="rounded-lg"
                    onClick={handleNext}
                    disabled={!isButtonActive}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {currentStep === 4 && (
                <div
                style={{
                    backgroundImage: 'url("/images/js-background.jpg")', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh', 
                  }}>
                    <div className="w-screen flex justify-center">

                   <Component/> 
                   <Button
                    className="rounded-lg"
                    onClick={handleNext}
                    disabled={!isButtonActive}
                  >
                    Done
                  </Button>
                   </div>
                </div>
                
            )}
            {currentStep === 5 && (
                <div
                style={{
                  backgroundImage: 'url("/images/js-background.jpg")', 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh', 
                }}
                className="w-screen flex flex-col items-center p-4"
              >
                <div className="w-full flex justify-center">
                  <SpookyCharacterDialogue
                    text="Thee-Bug: WHAT! There's no way! No one's ever been able to do complete my challenges!"
                    imageSrc={'/images/js-monster.jpg'}
                  />
                </div>
                
                <div className="w-full flex justify-center mt-4"> 
                  <Button
                    className="rounded-lg"
                    onClick={handleNext}
                    disabled={!isButtonActive}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
            {currentStep === 6 && (
                <div
                style={{
                  backgroundImage: 'url("/images/js-background.jpg")', 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh', 
                }}
                className="w-screen flex flex-col items-center p-4"
              >
                <div className="w-full flex justify-center">
                  <SpookyCharacterDialogue
                    text="Helper Pup: Yes!, I knew you could do it! Now quick, run out the door."
                    imageSrc={'/images/js-helper.jpg'}
                  />
                </div>
                
                <div className="w-full flex justify-center mt-4"> 
                  <Button
                    className="rounded-lg"
                    onClick={handleNext}
                    disabled={!isButtonActive}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

{currentStep === 7 && (
                <div
                style={{
                  backgroundImage: 'url("/images/js-background.jpg")', 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '100vh', 
                }}
                className="w-screen flex flex-col items-center p-4"
              >
                
                
                <div className="w-full flex justify-center mt-4"> 
                 <Popup type="Javascript to escape Thee-Bug"/>
                </div>
              </div>
            )}
        </div>
    );
};