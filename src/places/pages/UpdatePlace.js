import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/small_feature/public/2019-10/home_banner-min.jpg?itok=uZt-03Vw",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484005,
      lng: -73.9856531,
    },
    creator: "1",
  },
  {
    id: "2",
    title: "Eiffel Tower",
    description: "Pretty tall if you ask me",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipMVXIU7C3h4NRLgIXA8u9eS1dqgzvTHGBusFkFG=w408-h463-k-no",
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    location: {
      lat: 48.85787,
      lng: 2.294593,
    },
    creator: "2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h1>WHY YOU LOOKING FOR SOMETHING THAT AINT THERE</h1>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h1>LOADING YOU DATA CHILL DAMN</h1>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="ENTER A NORMAL TITLE DICKHEAD"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValidity={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(10)]}
        errorText="BROTHER PLEASE DESCRIBE THE LOCATION"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValidity={formState.inputs.description.isValid}
      />

      <Button type="submit" disabled={!formState.isValid}>
        Save Changes
      </Button>
    </form>
  );
};

export default UpdatePlace;
