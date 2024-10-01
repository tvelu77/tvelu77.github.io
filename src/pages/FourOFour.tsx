import { memo } from "react";
import { makeStyles } from "theme";
import { declareComponentKeys } from "i18nifty";

export const FourOhFour = memo(() => {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
        </div>
    );
});

export const { i18n } = declareComponentKeys<"not found">()({
    FourOhFour,
});

const useStyles = makeStyles({ "name": { FourOhFour } })(theme => ({
    "root": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": theme.colors.useCases.surfaces.background,
    },
}));