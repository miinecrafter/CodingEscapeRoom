const Lightning = () => {
    return (
      <div className="relative flex items-center justify-center h-screen bg-gray-800">
        <div className="absolute w-1 h-64 bg-yellow-500 animate-lightning"></div>
        <style jsx>{`
          @keyframes lightning {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.6;
              transform: scale(1.2);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
  
          .animate-lightning {
            animation: lightning 0.2s infinite;
            animation-delay: calc(0.2s * var(--i));
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
  
          .animate-lightning:nth-child(1) {
            --i: 0;
            width: 4px;
            height: 150px;
          }
          
          .animate-lightning:nth-child(2) {
            --i: 1;
            width: 6px;
            height: 100px;
            left: 55%;
          }
  
          .animate-lightning:nth-child(3) {
            --i: 2;
            width: 3px;
            height: 120px;
            left: 45%;
          }
        `}</style>
      </div>
    );
  };
  
  export default Lightning;
  