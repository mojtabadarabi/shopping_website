import {
  Box,
  Button,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyle from "./style";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { createProduct } from "../../../Services/products";
import { toast } from "react-toastify";
const names = ["لبنیات", "پوشاک", "لوازم التحریر"];
const empty = ["لطفا دسته بندی محصول را انتخاب کنید"];

function AddProduct() {
  const classes = useStyle();
  const [showDiscountInput, setshowDiscountInput] = useState(false);
  const [productPropertyList, setproductPropertyList] = useState([]);
  const [productProperty, setproductProperty] = useState("");
  const [name, setname] = useState(null);
  const [desc, setdesc] = useState(null);
  const [discount, setdiscount] = useState(null);
  const [category, setcategory] = useState([]);
  const [price, setprice] = useState(null);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcategory(typeof value === "string" ? value.split(",") : value);
  };
  function enterProductProperty(e) {
    if (e.key === "Enter") {
      setproductPropertyList([...productPropertyList, productProperty]);
      setproductProperty("");
    }
  }
  const submitFormHandler = async (e) => {
    e.preventDefault();
    const product = {
      title: name,
      description: desc,
      price,
      discount,
      category,
      properties: productPropertyList,
    };
    if (!name&&!desc&&!price&&!discount) {
        toast.error('مقادیر را کامل کنید')
    }
    else{
        try {
            const {status} = await createProduct(product);
            if (status===201) {
                toast.success('محصول با موفقیت ثبت شد')
                setname('')
                setdesc('')
                setprice('')
                setdiscount('')
                setcategory([])
                setproductPropertyList([])
            }
            
        } catch (error) {
            toast.error('مشکلی پیش آمده است')
        }

    }
  };
  return (
    <Box className={classes.addbox}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={classes.form}
      >
        <Typography variant="h5">افزودن محصول</Typography>
        <TextField
          className={classes.txtbox}
          label="نام محصول"
          variant="outlined"
          value={name}
          onChange={(e) => setname(e.target.value)}
          fullWidth
        />
        <Box>
          <InputLabel id="demo-multiple-checkbox-label">دسته بندی</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={category}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(" - ")}
            style={{ display: "block" }}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={category.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </Box>
        <TextField
          className={classes.txtbox}
          multiline
          label=" توضیخات"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          rows={4}
          rowsMax={4}
          variant="outlined"
          fullWidth
        />
        <Box className={classes.pricebox}>
          <TextField
            className={classes.txtbox}
            type="number"
            label=" قیمت"
            variant="outlined"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            InputProps={{
              endAdornment: (
                <Typography variant="body" color="textSecondary">
                  تومان
                </Typography>
              ),
            }}
          />
          <Box className={classes.checkboxcontainer}>
            <Checkbox
              className={classes.checkbox}
              onChange={(e) => setshowDiscountInput(e.target.checked)}
              checked={showDiscountInput}
            />
          </Box>
          <TextField
            disabled={!showDiscountInput}
            className={classes.txtbox}
            type="number"
            label=" تخفیف"
            value={discount}
            onChange={(e) => setdiscount(e.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <Typography variant="body" color="textSecondary">
                  درصد
                </Typography>
              ),
            }}
          />
        </Box>
        <TextField
          className={classes.txtbox}
          label=" ویژگی های محصول"
          variant="outlined"
          fullWidth
          value={productProperty}
          onChange={(e) => setproductProperty(e.target.value)}
          onKeyDown={(e) => enterProductProperty(e)}
        />
        <Box style={{ display: "flex", overflow: "auto" }}>
          {productPropertyList.map((prop) => (
            <span
              style={{
                padding: "2px 8px",
                display: "felx",
                margin: "5px",
                backgroundColor: "#f2f2f2",
              }}
            >
              <Button className={classes.removetagbtn}>
                <RemoveCircleOutlineIcon />
              </Button>
              <Typography variant="subscribe2">{prop}</Typography>
            </span>
          ))}
        </Box>
        <Button
          className={classes.submitbtn}
          fullWidth
          variant="contained"
          color="primary"
          onClick={submitFormHandler}
        >
          <Typography variant="h6">افزودن</Typography>
        </Button>
      </form>
    </Box>
  );
}

export default AddProduct;
