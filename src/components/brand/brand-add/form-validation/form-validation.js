export const formatForm = (data) => {
  const { sku, name, price, product, size, height, width, length } = data;

  const label =
    product === "DVD"
      ? `${size}MB`
      : product === "Book"
      ? `${size}Kg`
      : `${height}x${width}x${length}`;

  return {
    sku,
    name,
    price: parseFloat(price),
    product,
    size: label,
  };
};

export const validateForm = (product, setError) => {
  const typesWeight = ["Book"];
  let isError = false;

  Object.keys(product).map((key) => {
    if (product[key].trim() === "") {
      if (
        !!["height", "width", "length"].find((e) => e === key) &&
        product.product.toLowerCase() === "forniture"
      ) {
        setError((prevResult) => {
          return {
            ...prevResult,
            [key]: {
              value: true,
              message: `Must provide a(an) ${key}`,
            },
          };
        });
        isError = true;
      } else if (
        !(key === "size" && product.product.toLowerCase() === "forniture")
      ) {
        if (!["height", "width", "length"].find((e) => e === key)) {
          setError((prevResult) => {
            return {
              ...prevResult,
              [key]: {
                value: true,
                message: `Must provide a(an) ${
                  typesWeight.indexOf(product.product) > -1 ? "weight" : key
                }`,
              },
            };
          });
          isError = true;
        }
      }
    }
  });

  if (parseFloat(product.price) < 1 || parseFloat(product.price) > 1000000) {
    setError((prevResult) => {
      return {
        ...prevResult,
        price: {
          value: true,
          message: "The value must be between 1 and 1000000",
        },
      };
    });
    isError = true;
  }

  if (product.product.toLowerCase() !== "forniture") {
    if (product.size < 0 || product.size > 999) {
      setError((prevResult) => {
        return {
          ...prevResult,
          size: {
            value: true,
            message: "The value must be between 1 and 999",
          },
        };
      });
      isError = true;
    }
  } else {
    ["height", "width", "length"].map((element) => {
      if (product[element] < 0 || product[element] > 999) {
        setError((prevResult) => {
          return {
            ...prevResult,
            [element]: {
              value: true,
              message: "The value must be between 1 and 999",
            },
          };
        });
        isError = true;
      }
    });
  }

  return isError;
};
