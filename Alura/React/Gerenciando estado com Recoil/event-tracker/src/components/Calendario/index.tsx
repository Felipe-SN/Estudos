import React from 'react';
import style from './Calendario.module.scss';
import ptBR from './localizacao/ptBR.json';
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend';
import 'kalend/dist/styles/index.css';
import useAtualizarEvento from 'state/hooks/useAtualizarEvento';
import useListaEventos from 'state/hooks/useListaEventos';

interface IKalendEvento {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendario: React.FC = () => {
  const eventosKalend = new Map<string, IKalendEvento[]>();
  const eventos = useListaEventos();
  const atualizarEvento = useAtualizarEvento();

  eventos.forEach(evento => {
    const chave = evento.inicio.toISOString().slice(0, 10);
    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, []);
    }
    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: 'blue',
    });
  });

  const onEventDragFinish: OnEventDragFinish = (
    kalendPrevEvent: CalendarEvent,
    kalendUpdatedEvent: CalendarEvent
  ) => {
    const evento = eventos.find(
      evento => evento.descricao === kalendPrevEvent.summary
    );
    if (evento) {
      const eventoAtualizado = { ...evento };
      eventoAtualizado.inicio = new Date(kalendUpdatedEvent.startAt);
      eventoAtualizado.fim = new Date(kalendUpdatedEvent.endAt);

      atualizarEvento(eventoAtualizado);
    }
  };

  return (
    <div className={style.Container}>
      <Kalend
        calendarIDsHidden={['work']}
        customLanguage={ptBR}
        events={Object.fromEntries(eventosKalend)}
        hourHeight={60}
        initialDate={new Date().toISOString()}
        initialView={CalendarView.WEEK}
        language={'customLanguage'}
        onEventDragFinish={onEventDragFinish}
        timeFormat={'24'}
        weekDayStart={'Monday'}
      />
    </div>
  );
};

export default Calendario;
