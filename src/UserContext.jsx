import { createContext, useContext, useState, useRef, useEffect } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  //FOR DROPDOWN LINK
  const [showLink, setShowLink] = useState(false);
  const toggleLink = () => {
    setShowLink((s) => !s);
  };
  const cancelLink = () => {
    setShowLink(false);
  };

  //FOR SIGN IN/LOGOUT
  const [signedIn, setSignedIn] = useState(false);
  const signIn = () => setSignedIn(true);
  const logout = () => setSignedIn(false);

  const [hovered, setHovered] = useState(null);
  const timeoutRef = useRef(null);
  const handleEnter = (id) => {
    clearTimeout(timeoutRef.current);
    setHovered(id);
  };
  const handleLeave = () => {
    // add a tiny delay before hiding
    timeoutRef.current = setTimeout(() => {
      setHovered(null);
    }, 200);
  };

  //COUNTDOWN TIMER
  const [user, setUser] = useState(null);

  // --- Countdown logic ---
  // Try to load stored end time or set new 72-hour target
  const [targetTime, setTargetTime] = useState(() => {
    const saved = localStorage.getItem("flashSaleEnd");
    if (saved) return parseInt(saved);
    const newTime = Date.now() + 72 * 60 * 60 * 1000;
    localStorage.setItem("flashSaleEnd", newTime);
    return newTime;
  });
  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = targetTime - Date.now();
      if (remaining <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
        localStorage.removeItem("flashSaleEnd"); // reset if expired
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);


  //item sliders
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <UserContext.Provider
      value={{
        toggleLink,
        showLink,
        cancelLink,
        signedIn,
        signIn,
        logout,
        handleLeave,
        handleEnter,
        user,
        setUser,
        timeLeft,
        hours,
        minutes,
        seconds,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
