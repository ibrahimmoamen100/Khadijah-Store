import { billboards } from "@/data";

const getBillboard = async (id: string) => {
  return billboards.find((billboard) => billboard.id === id) || null;
};

export default getBillboard;
