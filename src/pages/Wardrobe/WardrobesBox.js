import React, { useState, useEffect } from "react";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import FeedbackModal from "../../components/Modals/FeedbackModal";
import SortedBy from "../../components/sorted/SortedBy";
import { Link } from "react-router-dom";
import SaveWardrobe from "../../services/saveWardrobe";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RenameWardrobeModal from "../../components/Modals/RenameWardrobeModal";
import DeletedSuccessfullyToast from "../../components/Toasts/DeletedSuccessfullyToast";

const WardrobesBox = () => {

      const userId = "user123";
      const token = useSelector((state) => state.token);
      const [modalShow, setModalShow] = useState(false);
      const [wardrobes, setWardrobe] = useState([]);
      const [showToast, setShowToast] = useState(false);      // State to control the visibility of the toast
      const [showRenameModal, setShowRenameModal] = useState(false);
      const [sortOrder, setSortOrder] = useState('Newest First'); // Default sorting
      const [currentWardrobeId, setCurrentWardrobeId] = useState(null);

      // api required parameters
      const accessToken = useSelector(state => state.token);
      const navigate = useNavigate();

      useEffect(() => {
            const fetchWardrobe = async () => {
                  try {
                        const data = await SaveWardrobe.getAllSaveWardrobes(token);
                        console.log("wardrobedata", data);
                        setWardrobe(data); // Update state with fetched wardrobe products data

                        // Assuming `created at timetstramp` is available and is a suitable replacement for sorting by creation date
                        const sortedData = sortOrder === 'Newest First'
                              ? [...data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                              : [...data].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

                        setWardrobe(sortedData);

                  } catch (error) {
                        console.error("Error fetching wardrobe products:", error);
                        // Handle error or set an error state
                  }
            };

            fetchWardrobe();
      }, [userId, token, sortOrder]); // Run effect whenever userId or token changes

      // function to delete wardrobe
      const handleDeleteWardrobe = async (id) => {
            if (!id) {
                  console.error('Wardrobe ID is undefined');
                  return;
            }

            try {
                  await SaveWardrobe.deleteSaveWardrobe(accessToken, id);
                  console.log("Wardrobe deleted successfully");
                  // Setting the state to show the toast after successful deletion of toast
                  setShowToast(true);

                  // Set a timeout to refresh the page after 3 seconds,  till 3 seconds deletion toast will show 
                  setTimeout(() => {
                        window.location.reload();
                  }, 3000);

            } catch (error) {
                  console.error('Failed to delete wardrobe:', error);
            }
      };

      const handleButtonClick = () => {
            setModalShow(!modalShow); // Toggle the modal state
      };



      // Function to close the modal
      const handleModalClose = () => {
            setShowRenameModal(false); // Close the modal
      };

      // function for sorting
      const handleSortChange = (order) => {
            setSortOrder(order); // Update sorting order
      };

      return (
            <>
                  <div className="HomeBox">
                        <div className="gif-image d-none d-lg-block">
                              <img src="/images/Home-screen.gif" alt="Gif Image" />
                        </div>
                        <SortedBy onSortChange={handleSortChange} />


                        <div className="MainCardBox">
                              <Row className="g-3 me-0">
                                    {wardrobes && wardrobes.map((wardrobeItem, index) => (
                                          <Col key={index} xs={12} md={6} xl={3} lg={4}>
                                                <div className="HomeCard">
                                                      <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
                                                            {/* Rendering wardrobe images here */}
                                                            {wardrobeItem.products && Array.isArray(wardrobeItem.products) && wardrobeItem.products.slice(0, 6).map((product, imgIndex) => (
                                                                  <Col key={imgIndex} md={4} className="mblCol">
                                                                        {product.image && product.image.length > 0 && (
                                                                              <>
                                                                                    <img className="SmlProduct" src={product.image[0]} alt={`product-${imgIndex}`} />
                                                                              </>
                                                                        )}
                                                                  </Col>
                                                            ))}
                                                      </Row>
                                                      <div className="d-flex justify-content-between align-items-center mb-3">
                                                            <Link to={`/wardrobe/${wardrobeItem.wardrobe_id}`} style={{ textDecoration: 'none' }}>
                                                                  <p className="WrdbNmbr">{wardrobeItem.name} </p>
                                                            </Link>
                                                            <Dropdown className="twoOption">
                                                                  <Dropdown.Toggle id="dropdown-basic" className="btnSimple">
                                                                        <img src="/images/three-Icon.svg" alt="three doit" />
                                                                  </Dropdown.Toggle>

                                                                  <Dropdown.Menu>

                                                                        <Dropdown.Item onClick={() => handleDeleteWardrobe(wardrobeItem.wardrobe_id)}>
                                                                              Delete  <img src="/images/remove-icon.svg" alt="icon" />
                                                                        </Dropdown.Item>

                                                                        <Dropdown.Item onClick={() => {
                                                                              setShowRenameModal(true);
                                                                              setCurrentWardrobeId(wardrobeItem.wardrobe_id); // Set current wardrobe ID when Rename is clicked
                                                                        }}>
                                                                              Rename
                                                                        </Dropdown.Item>

                                                                  </Dropdown.Menu>
                                                            </Dropdown>

                                                            <RenameWardrobeModal
                                                                  show={showRenameModal}
                                                                  onHide={handleModalClose}
                                                                  wardrobeId={currentWardrobeId} // Passing the currentWardrobeId to the modal
                                                            />

                                                      </div>
                                                      <div className="CreatedTime d-flex justify-content-between align-items-center">
                                                            <Button className="BtnTaggCstm">
                                                                  <img src="/images/home-card-Icon.svg" alt="custom" />
                                                                  <span>Custom</span>
                                                            </Button>

                                                            <p className="AgaoTime">
                                                                  Created:{wardrobeItem.created_at}
                                                            </p>

                                                      </div>
                                                      <div className="BottomCurveImg">
                                                            <img src="/images/bottom-bg-img.svg" alt="curve" />
                                                      </div>
                                                </div>
                                          </Col>
                                    ))}
                              </Row>
                        </div>


                        {/* Showing the deleted successfully Toast component */}
                        <DeletedSuccessfullyToast showToast={showToast} onClose={() => setShowToast(false)} />

                        <Button className="btnFeedBack" onClick={handleButtonClick}>
                              <img src="/images/feedback-Icon.svg" alt="icon" />
                              Feedback
                        </Button>
                        <FeedbackModal show={modalShow} onHide={() => setModalShow(false)} />
                  </div >
            </>
      )
}

export default WardrobesBox