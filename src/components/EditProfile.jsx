import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal, DropdownButton, Dropdown, InputGroup } from "react-bootstrap";

const CustomCheckbox = ({ id, label }) => {
	return (
		<InputGroup className="">
			<InputGroup.Checkbox id={id} className="border-secondary rounded-0" />
			<Form.Label htmlFor={id} className="form-check-label d-flex">
				{label}
			</Form.Label>
		</InputGroup>
	);
};

const EditProfilePage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);
	return (
		<Container className="text-light">
			<div className="d-flex flex-column justify-content-center align-items-center my-container my-auto">
				<h1>Edit Profile</h1>

				<Row className="border-top border-1 pb-4 my-4 profile-border" style={{ width: "626px" }}>
					<Col xs={3} className="text-center">
						<img
							src="./assets/img/kids_icon.png"
							alt="Profile kids"
							className="mt-3 pointer"
							style={{ maxWidth: "110px" }}
						/>
					</Col>
					<Col>
						<Row className="border-bottom border-1 pb-4 my-4 profile-border">
							<Col>
								<Button variant="secondary" size="sm" className="rounded-0 pe-5 mb-3 text-start">
									Strive student
								</Button>
								<p className="mb-1 text-secondary">Language:</p>
								<DropdownButton variant="secondary" title="English" className="rounded-0 border border-1">
									<Dropdown.Item href="#">Italian</Dropdown.Item>
									<Dropdown.Item href="#">German</Dropdown.Item>
								</DropdownButton>
							</Col>
						</Row>
						<Row className="border-bottom border-1 pb-4 profile-border">
							<Col>
								<p className="mt-3 text-secondary">Maturity Settings:</p>
								<Button variant="secondary" size="sm" className="rounded-0 pe-5 mb-3 mt-1">
									ALL MATURITY RATINGS
								</Button>
								<p>Show titles of all maturity ratings for this profile</p>
								<Button variant="secondary" className="my-3 border border-1 border-secondary rounded-0">
									EDIT
								</Button>
							</Col>
						</Row>
						<Row>
							<Col xs={9}>
								<p className="mt-4 mb-1 text-secondary">Autoplay controls</p>
								<CustomCheckbox id="autoplay-next" label="Autoplay next episode in a series on all devices." />
								<CustomCheckbox id="autoplay-previews" label="Autoplay previews while browsing on all devices." />
							</Col>
						</Row>
					</Col>
				</Row>

				<Row className="border-top border-1 pb-4 mt-3 profile-border" style={{ width: "626px" }}>
					<Col>
						<Button variant="light" className="fw-semibold my-3 border border-1 border-secondary rounded-0 flex-grow-1">
							SAVE
						</Button>
					</Col>
					<Col>
						<Button
							variant="secondary"
							className="fw-semibold my-3 border border-1 border-secondary rounded-0 flex-grow-1"
						>
							CANCEL
						</Button>
					</Col>
					<Col>
						<Button
							variant="secondary"
							className="fw-semibold my-3 border border-1 border-secondary rounded-0 flex-grow-1"
							onClick={handleShowModal}
						>
							DELETE PROFILE
						</Button>
					</Col>
				</Row>

				<Modal show={showModal} onHide={handleCloseModal}>
					<Modal.Header closeButton className="my-bg-modal">
						<Modal.Title className="text-light">CANCEL</Modal.Title>
					</Modal.Header>
					<Modal.Body className="my-bg-modal fs-3 fw-bold text-light">Are you sure to delete?</Modal.Body>
					<Modal.Footer className="my-bg-modal">
						<Button variant="secondary" onClick={onclose}>
							Close Edit Profile
						</Button>
						<Button variant="danger">CANCEL</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</Container>
	);
};

export default EditProfilePage;
