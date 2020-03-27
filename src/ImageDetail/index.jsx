import React, { useState, useEffect } from "react";

import classNames from "classnames";
import * as Spinners from "css-spinners-react";

import { useStyles } from "./useStyle";

export function ImageDetail(props) {
  const { image, updateImage, removeImage, close } = props;
  const url = image.url;
  const fullUrl = image.fullUrl || url;
  const [renderUrl, setRenderUrl] = useState(url);
  const [isImageView, setImageView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isNameChanged, registerNameChange] = useState(false);
  const [changedName, setChangedName] = useState(image.name);
  const [inputValue, setInputValue] = useState(changedName);
  const [isRemoveConfirmation, setRemoveConfirmation] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    const bigImage = new Image();
    bigImage.src = fullUrl;
    bigImage.onload = () => {
      setLoaded(true);
      setRenderUrl(fullUrl);
    };
  }, []);

  const classes = useStyles();

  return (
    <div
      className={classes.globalWrapper}
      onClick={isImageView ? () => setImageView(false) : null}
      style={isImageView ? { overflow: "scroll" } : null}
    >
      {isRemoveConfirmation ? (
        <div className={classes.removeConfirmWindowWrapper}>
          <div className={classes.removeConfirmWindow}>
            <div className={classes.removeConfirmWindowHeader}>
              Confirmation
            </div>
            <div className={classes.removeConfirmWindowText}>
              Should this image be deleted?
            </div>
            <div className={classes.removeConfirmWindowButtons}>
              <button
                onClick={() => {
                  setRemoveConfirmation(false);

                  removeImage(image);
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setRemoveConfirmation(false);
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isImageView ? (
        <img src={renderUrl} className={classes.fullSizeImage} />
      ) : (
        <div>
          <div
            style={{
              maxHeight: 1,
              justifyContent: "flex-end",
              display: "flex"
            }}
          >
            <button className={classes.closeButton} onClick={() => close()}>
              <div>✖</div>
            </button>
          </div>

          <div className={classes.formContent}>
            <div className={classes.imageContainer}>
              <img src={renderUrl} onClick={() => setImageView(true)} />
            </div>
            <div className={classes.controlsContainer}>
              <div className={classes.spinnerContainer}>
                {" "}
                {isLoaded ? null : (
                  <React.Fragment>
                    <Spinners.ThreeQuarters />
                    Loaging full image...
                  </React.Fragment>
                )}
              </div>
              <div className={classes.detailsContainer}>
                <div className={classes.detailItem}>
                  <label>ID:</label>
                  <div>{image.id}</div>
                </div>

                <div
                  className={classNames(
                    classes.detailItem,
                    isNameChanged ? classes.changeddetailItem : ""
                  )}
                >
                  <label>Name:</label>

                  {isEdit ? (
                    <div className={classes.inputGroupContainer}>
                      <div className={classes.inputContainer}>
                        <input
                          type="text"
                          autoFocus={true}
                          value={inputValue}
                          className={classes.input}
                          onChange={e => {
                            setInputValue(e.target.value);
                          }}
                          onKeyPress={e => {
                            if (e.key === "Enter") {
                              setChangedName(inputValue);
                              registerNameChange(true);
                              setIsEdit(false);
                            }
                          }}
                        />
                        <button
                          className={classes.inputConfirmButton}
                          onClick={() => {
                            setChangedName(inputValue);
                            registerNameChange(true);
                            setIsEdit(false);
                          }}
                        >
                          ✔
                        </button>
                        <div
                          className={classNames(
                            classes.inputHint,
                            inputValue !== image.name
                              ? classes.inputHintActivated
                              : null
                          )}
                        >
                          Press Enter to confirm
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div
                    className={classNames(
                      classes.nameValue,
                      isNameChanged ? classes.changedNameValue : "",
                      isEdit ? classes.nameValueUnderEdit : ""
                    )}
                  >
                    {changedName}
                    <button
                      disabled={isEdit}
                      className={classes.editButton}
                      onClick={() => setIsEdit(true)}
                    >
                      ✎
                    </button>
                  </div>
                </div>
              </div>

              <div className={classes.actionButtons}>
                <button
                  className={classNames(
                    !isNameChanged
                      ? classes.hiddenConfirmButton
                      : classes.confirmButton
                  )}
                  onClick={() => updateImage({ ...image, name: changedName })}
                >
                  ✔ Confirm
                </button>

                <button
                  className={classes.removeButton}
                  onClick={() => setRemoveConfirmation(true)}
                >
                  ✖ Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
