import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../../components/USA_Admin_Panel/usaAdminPanel.css";
import "./usLitigationModal.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import closeButtonImage from "../../assets/images/modal-cross.svg";

interface LitigationModalProps {
  show: boolean;
  onClose: () => void;
  data: {
    id: string;
    ndaNumber: string;
    caseNumber: string;
    filingDate: string;
    courtJurisdiction: string;
    plaintiffsDefendants: string;
    natureOfSuit: string;
    decision: string;
    status: string;
    petitionNumbers: string;
    isValid: boolean;
    __v: number;
    createdAt: string;
    updatedAt: string;
  };
}

const LitigationModal: React.FC<LitigationModalProps> = ({
  show,
  onClose,
  data,
}) => {
  const [litigationDetailData, setLitigationDetailData] = useState<any[]>([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    searchRecords();
  }, []);

  const searchRecords = async () => {
    setShowLoader(true);
    try {
      const response = await axios.get(
        `${process.env.URL}getUsCaseDetails?ndaNumber=${data.ndaNumber}`
      );
      console.log("res", response);
      if (response.status === 200) {
        if (response.data.result.length > 0)
          setLitigationDetailData(response.data.result);
      }
    } catch (error: any) {
      console.log("error", error);
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      dialogClassName="custom-modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header className="modal-header">
        <Modal.Title id="example-custom-modal-styling-title">
          <p>
            <strong>Case Number:</strong> {data.caseNumber}
          </p>
        </Modal.Title>
        <div className="crossButton" onClick={onClose}>
          <img src={closeButtonImage}></img>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="details-grid">
          <p>
            <strong>Date:</strong> {data.filingDate}
          </p>
          <p>
            <strong>Court With Jurisdiction:</strong> {data.courtJurisdiction}
          </p>
          <p>
            <strong>Plaintiffs and Defendants:</strong>{" "}
            {data.plaintiffsDefendants}
          </p>
          <p>
            <strong>Patent Numbers:</strong> {data.petitionNumbers}
          </p>
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
          <div className="detail-description w-100">
            <div className="subheading">
              <div className="text-wrapper-21">
                <p>
                  <strong>
                    Detailed description of Hearings of Litigation
                  </strong>
                </p>
              </div>
            </div>
            <div className="detail-litigation">
              <div className="div-9 headerFields w-100">
                <div className="div-6" style={{ width: "15%" }}>
                  <div className="element-29 w-100">
                    <div className="text-wrapper-9">Nature of Suit</div>
                  </div>
                </div>
                <div className="div-6" style={{ width: "15%" }}>
                  <div className="element-39 w-100">
                    <div className="text-wrapper-9">Date of Proceedings</div>
                  </div>
                </div>
                <div className="div-6" style={{ width: "10%" }}>
                  <div className="element-39 w-100">
                    <div className="text-wrapper-9">Filing Number</div>
                  </div>
                </div>
                <div className="div-8" style={{ width: "60%" }}>
                  <div className="frame-wrapper w-100">
                    <div className="frame-2 w-100">
                      <div className="text-wrapper-22">
                        Proceedings in Court
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scrollable-table">
                {litigationDetailData?.map((row, index) => (
                  <div
                    className={`div-9 w-100 lgDataRows ${
                      index == litigationDetailData.length - 1
                        ? "round-border-left round-border-right"
                        : ""
                    }`}
                  >
                    <div className="div-6" style={{ width: "15%" }}>
                      <div className="element-34 w-100">
                        <div className="text-wrapper-10">
                          {data.natureOfSuit}
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "15%" }}>
                      <div className="element-34 w-100">
                        <div className="text-wrapper-10">
                          {row.dateOfProceedings}
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "10%" }}>
                      <div className="element-34 w-100">
                        <div className="text-wrapper-10">
                          {row.filingNumber}
                        </div>
                      </div>
                    </div>
                    <div className="div-6" style={{ width: "60%" }}>
                      <div className={`element-41 w-100`}>
                        <div className="text-wrapper-10">
                          {row.proceedingsInCourt}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LitigationModal;
