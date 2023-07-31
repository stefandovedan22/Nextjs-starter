import type { NextPage } from "next";

import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


const Home: NextPage = () => {

  const {t} = useTranslation();

  return <Box>Index Page</Box>


};

export default Home;
