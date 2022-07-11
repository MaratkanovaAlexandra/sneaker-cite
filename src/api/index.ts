import type { ProductType } from "@/types/Product";
import axios from "axios";

export const getProducts = async (
  sort: string,
  category = ""
): Promise<ProductType[]> => {
  return (
    await axios.get(
      `https://fakestoreapi.com/products${
        category ? `/category/${category}` : ""
      }`,
      {
        params: {
          sort: sort,
        },
      }
    )
  ).data;
};

export const getCategories = async (): Promise<
  { url: string; text: string }[]
> => {
  const result = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );

  return [
    { url: "/products", text: "New arrivals" },
    ...result.data.map((i: string) => ({
      url: `/products?category=${i.replace(" ", "%20").replace("'", "%27")}`,
      text: i,
    })),
  ];
};
