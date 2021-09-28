import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import PropTypes from "prop-types";

export default function AddToCart({ itemCount }) {
  return (
    <Badge data-testid="badge-count" badgeContent={itemCount} color="default">
      <ShoppingCartIcon color="action" />
    </Badge>
  );
}

AddToCart.propTypes = {
  itemCount: PropTypes.number,
};
