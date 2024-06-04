import * as z from "zod";

    const productSchema = z.object({
        title : z.string ().min(6 ).max(50),
        price : z.number ().min(0),
        description : z.string ().min(0 ).max(500).optional(),
      })

export default productSchema;