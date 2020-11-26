import React from "react";
import "./EntryForm.css";
import { useTranslation } from "react-i18next";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    rowWrapper: {
        display: "flex",
        alignItems: "center"
    },
    control: {
        width: "100%"
    },
    radioLabel: {
        textAlign: "left"
    }
}));

function pickControlByType(controlData, translate, classes) {


    switch (controlData.type) {
        case "textarea":
            return <FormControl className={classes.control}>
                <TextareaAutosize
                    rowsMax={10}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
                />
            </FormControl>
        case "select":
            return <FormControl variant="outlined" className={classes.control}>
                <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label={translate(controlData.label)}>
                    {controlData.option.map((option) => {
                        return <MenuItem value={translate(option)}>{translate(option)}</MenuItem>;
                    })}
                </Select>
            </FormControl>
        case "date":
            return <FormControl variant="outlined" className={classes.control}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </FormControl>
        case "radio":
            return <FormControl component="fieldset" className={classes.control}>
                <FormLabel component="legend" className={classes.radioLabel}>Gender</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />
                    <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />
                </RadioGroup>
            </FormControl>
        default:
            return <FormControl variant="outlined" className={classes.control}>
                <InputLabel htmlFor="component-outlined">{translate(controlData.label)}</InputLabel>
                <OutlinedInput id="component-outlined" name={controlData.name} label={controlData.name} />
            </FormControl>
    }
}

export default function MaterialEntryForm({ data }) {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <section>
            <h3 className="entry__title">{t(data.title)}</h3>
            <form className={classes.root} name="entry" action={data.action} autoComplete="off">
                {data.items.map((item) => {
                    return (
                        <div className={classes.rowWrapper}>
                            {pickControlByType(item, t, classes)}
                        </div>
                    )
                })}
                <input type="submit" value={t(data.submit)} className="entry__btn" />
            </form>
        </section>
    );
}
