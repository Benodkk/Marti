import axios from "axios";

const client_id = "marti-66247ce7886f8b28c5e99be874631675";

export const getDataFurgoentka = async () => {
  try {
    const data = await axios.get(
      `https://api.furgonetka.pl/oauth/authorize?response_type=code&client_id=marti-66247ce7886f8b28c5e99be874631675&redirect_uri=https://www.martibikini.com/
      `,
      {}
    );
  } catch (error) {
    console.log(error);
  }
};
