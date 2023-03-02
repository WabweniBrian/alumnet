import { useState } from "react";

export default function App() {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const pickImageAsync = async () => {
    // ...rest of the code remains same

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      // ...rest of the code remains same
    }
  };
}
