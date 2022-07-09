import React, {useState, useEffect} from "react";
import { useProgress } from '@react-three/drei'
import {Container} from "./styledComponents/GlobalStyles"

type Data = {
    progress: number;
    total: number;
};

export const Loader: React.FC = () => {
  const {progress, total}: Data = useProgress()
  const [isFinish, setIsFinish] = useState<boolean>(false)

  useEffect(() => {
        if (total === 6) {
            setIsFinish(true)
        }
  }, [progress])

 
  return  (
    <>
    {!isFinish &&
        <Container>
        <div>Sunset Types</div>
          <div>Loading...</div>
        </Container>
    }

    </>
  )
}
