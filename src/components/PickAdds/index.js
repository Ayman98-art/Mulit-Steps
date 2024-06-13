import React from "react";
import MainTitle from "../MainTitle";
import SelectPick from "../SelectPick";

function PickAdds() {
  return (
    <>
      <MainTitle
        mainTitle={"Pick add-ons"}
        subTitle={"Add-ons help enhance your gaming experience."}
      />
        <SelectPick
          boolean={true}
          titleHead={"Online service"}
          subTitleHead={"Access to multiplayer games"}
          price={"+$1/mo"}
        />

        <SelectPick
          boolean={true}
          titleHead={"Larger storage"}
          subTitleHead={"Extra than 1TB of cloud save"}
          price={"+$2/mo"}
        />

        <SelectPick
          boolean={false}
          titleHead={"Customizable Profile"}
          subTitleHead={"Custom theme on your profile"}
          price={"+$3/mo"}
        />
    </>
  );
}

export default PickAdds;
