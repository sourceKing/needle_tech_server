import { connectDB } from "../lib/db";
import ClusterHead from "../models/ClusterHead";
connectDB();

// Example with Vercel
export default async (req, res) => {
  if (req.method !== "POST")
    return res.send({
      error: true,
      message: "Wrong HTTP method for the route",
    });

  try {
    // console.log(req.body);
    const {
      enumerator_name,
      enumerator_contact,
      state,
      lga,
      town,
      name_of_cluster_head,
      contact_of_cluster_head,
      cluster_head_image,
      name_of_cluster_area,
      number_of_farmer_in_cluster_group,
      size_of_cluster_farm_land,
      area_measure_doc,
      planted_farm_val,
      farm_img,
      lat,
      long,
      is_new_entry_or_redo,
      any_other_info,
    } = req.body;

    console.log(
      enumerator_name,
      enumerator_contact,
      state,
      lga,
      town,
      name_of_cluster_head,
      contact_of_cluster_head,
      cluster_head_image,
      name_of_cluster_area,
      number_of_farmer_in_cluster_group,
      size_of_cluster_farm_land,
      area_measure_doc,
      planted_farm_val,
      farm_img,
      lat,
      long,
      is_new_entry_or_redo
    );

    let clusterHead = new ClusterHead({
      enumerator_name,
      enumerator_contact,
      state,
      lga,
      town,
      name_of_cluster_head,
      contact_of_cluster_head,
      cluster_head_image,
      name_of_cluster_area,
      number_of_farmer_in_cluster_group,
      size_of_cluster_farm_land,
      area_measure_doc,
      planted_farm_val,
      farm_img,
      lat,
      long,
      is_new_entry_or_redo,
    });
    await clusterHead.save();
    // client.close();
    // console.log("result from insert query", enumerator);
    res.send({
      error: false,
      status: "success",
      message: "data saved successfully",
      data: clusterHead,
    });
  } catch (error) {
    res.send({
      error: true,
      status: "failed",
      message: error.toString() || err.message,
      data: null,
    });
  }
};
