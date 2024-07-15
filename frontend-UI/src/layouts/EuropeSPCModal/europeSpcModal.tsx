import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../components/AdminPanel/adminPanel.css";
import "./europeSpcModal.css"
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import closeButtonImage from "../../assets/images/modal-cross.svg";

interface SpcModalProps {
  show: boolean;
  onClose: () => void;
  apnNumber: string;
}

const SpcModal: React.FC<SpcModalProps> = ({
  show,
  onClose,
  apnNumber,
}) => {
  const [spcDetailData, setSpcDetailData] = useState<any[]>([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    searchRecords();
  }, []);

  const searchRecords = async () => {
    setShowLoader(true);
    try {
      const response = await axios.get(
        `${process.env.URL}getEpSpc?agencyProductNumber=${apnNumber}`
      );
      console.log("res", response);
      if (response.status === 200) {
        if (response.data.result.length > 0)
          setSpcDetailData(response.data.result);
      }
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <Modal className="spc_modal"
      show={show}
      onHide={onClose}
      dialogClassName="custom-modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Body>
      <div className="spc-title-header">
      <div className="d-flex align-items-end" style={{paddingBottom:'10px'}}>
      <p style={{margin: '0px'}}>
            <strong>Detailed description of Hearings of Litigations</strong>
          </p>
      </div>
      <div className="crossButton" onClick={onClose}>
          <img src={closeButtonImage}></img>
        </div>
      </div>
        {showLoader ? (
          <div className="loader-wrapper">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="spc-detail">
                    <div className="spc-headers">
                      <div className="brand-name">
                          <div className="text-wrapper-17">Brand name</div>
                      </div>
                      <div className="active-ingredient">
                          <div className="text-wrapper-17">
                            Active ingredient
                        </div>
                      </div>
                      <div className="Country">
                          <div className="text-wrapper-17">COUNTRY</div>
                      </div>
                      <div className="ep">
                        <div className="title">
                          <div className="group-6">
                            <div className="text-wrapper-17" style={{color: '#9E028F'}}>EP1470124</div>
                          </div>
                        </div>
                        <div className="status">
                          <div className="group-7">
                            <div className="text-wrapper-17" style={{color: 'white'}}>Status</div>
                          </div>
                          <div className="group-7">
                            <div className="text-wrapper-17" style={{color: 'white'}}>Expiry</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="scrollable-table">
                    {spcDetailData?.map((row, index) => (
                      <div className={`spc-rows w-100 d-flex ${index === spcDetailData.length-1 ? 'last-row' : ''}`} key={index}>
                        <div
                          className="spc-rows-cell"
                        >
                          <div className="text-wrapper-10">IBRANCE</div>
                        </div>
                        <div className="spc-rows-cell">
                          <div className="text-wrapper-10">PALBOCICLIB</div>
                        </div>
                        <div className="spc-rows-cell">
                          <div className="text-wrapper-10">AT</div>
                        </div>
                        <div className="spc-rows-cell">
                          <div className="text-wrapper-10">Granted</div>
                        </div>
                        <div
                          className="spc-rows-cell"
                        >
                          <div className="text-wrapper-10">Jan 10, 2028</div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SpcModal;
