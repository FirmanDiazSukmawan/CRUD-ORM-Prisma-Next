import Image from "next/image";
import React, { useEffect, useState } from "react";
import pp from "../../assets/pptest.jpg";
import axios from "axios";

export const metadata = {
  title: "ini Test title",
  description: "mana ga ada",
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_RECIPE}/getUser`
    );
    // console.log(response.data.data);
    return {
      props: {
        data: response.data.data,
        error: false,
        errorMessage: "berhasil get data",
      },
    };
  } catch (err) {
    return {
      props: [],
      error: true,
      errorMessage: "error API",
    };
  }
}

function Index(props) {
  // console.log(props);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!props.error && props.data && props.data.length > 0) {
      setLoading(false);
    }
  }, [props]);
  return (
    <div>
      {props.error ? (
        <div>{props.errorMessage}</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        props?.data?.map((item, index) => (
          <div key={index}>
            <div>{item.username}</div>
            <div>{item.phone_number}</div>
            <h1> ini Detail Product</h1>
            {item.image && (
              <Image
                src={item.image}
                alt="picture"
                width={500}
                height={500}
                className="w-[200px] h-[200px]"
                placeholder="blur"
              />
            )}
          </div>
        ))
      )}

      <div>
        {" "}
        <Image src={pp} alt="picture" width={500} height={500} />
      </div>
    </div>
  );
}

export default Index;
