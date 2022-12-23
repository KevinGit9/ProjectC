import { useState, useEffect } from 'react';

export interface TicketContext {
  machineId: string;
  type: string;
  userId: string;
  setMachineId: (machineId: string) => void;
}

const defaultTicketContext: TicketContext = {
  machineId: '',
  type: '',
  userId: '',
  setMachineId: () => { },
};

export const useTicketContext = (): TicketContext => {
  const [ticketState, setTicketState] = useState<TicketContext>(defaultTicketContext);

  const setMachineId = (machineId: string) => {
    setTicketState((state) => ({ ...state, machineId }));
  };

  return { ...ticketState, setMachineId };
}