const Reviews = async ({ productId }: { productId: string }) => {
  // Dummy reviews data
  const reviews = {
    data: [
      {
        id: "1",
        customer: {
          avatar_url: "/john doe.jpg",
          display_name: "John Doe",
        },
        rating: 5,
        heading: "Amazing product!",
        body: "I absolutely love this product. It exceeded my expectations in every way.",
        media: [
          { id: "1", url: "/product.png" },
        ],
      },
      {
        id: "2",
        customer: {
          avatar_url: "/jane.png",
          display_name: "Jane Smith",
        },
        rating: 4,
        heading: "Very good, but could be better",
        body: "The product is great, but I wish it had a few more features.",
        media: [{ id: "3", url: "/product.png" }],
      },
      {
        id: "3",
        customer: {
          avatar_url: "/mike-curran.jpeg",
          display_name: "Mike Johnson",
        },
        rating: 3,
        heading: "Average experience",
        body: "The product is okay, but I had higher expectations.",
        media: [],
      },
    ],
  };

  return reviews.data.map((review: object) => (
    <div className="flex flex-col gap-4" key={review?.id}>
      {/* USER */}
      <div className="flex items-center gap-4 font-medium">
        <img
          src={review?.customer?.avatar_url}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>{review.customer.display_name}</span>
      </div>
      {/* STARS */}
      <div className="flex gap-2">
        {Array.from({ length: review.rating }).map((_, index) => (
          <img src="/star.png" alt="" key={index} width={16} height={16} />
        ))}
      </div>
      {/* DESC */}
      {review.heading && <p>{review.heading}</p>}
      {review.body && <p>{review.body}</p>}
      <div className="">
        {review.media.map((media: any) => (
          <img
            src={media.url}
            key={media.id}
            alt=""
            width={100}
            height={50}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  ));
};

export default Reviews;
