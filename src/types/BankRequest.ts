export interface Location {
  lat: number;
  long: number;
}

export interface ReachedUser {
  lat: number;
  long: number;
}

export type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
export type RequestStatus = "pending" | "fulfilled";
export type UrgencyLevel = "Low" | "High";

export interface BankRequest {
  _id: string;
  id: string;
  location: Location;
  status: RequestStatus;
  group: BloodGroup;
  urgency: UrgencyLevel;
  reachedUsers: ReachedUser[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// Example usage:
// const bankRequest: BankRequest = {
//   _id: "67e890c7626ff638e79a6874",
//   id: "gmudonor",
//   location: {
//     lat: 38.0320876,
//     long: -78.5104382
//   },
//   status: "pending",
//   group: "O+",
//   urgency: "Low",
//   reachedUsers: [],
//   createdAt: "2025-03-30T00:31:03.281Z",
//   updatedAt: "2025-03-30T00:31:03.281Z",
//   __v: 0
// }; 