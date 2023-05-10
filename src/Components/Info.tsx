import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Button from './shared/Button';
import { IInfoContext, useModal } from '../Store/ModalContext';
function Info() {
  const { info, setInfo, isOpen, setIsOpen }: any = useModal();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10  " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed h-full inset-0 overflow-y-auto ">
            <div className="flex min-h-full h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[90%] bg-white h-full shadow-xl transition-all p-6 rounded flex flex-col">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 bg-[#FFE664] py-1 rounded"
                  >
                    خلاصه فیلم
                  </Dialog.Title>
                  <div className="mt-4 flex-1">
                    <p className="text-sm text-gray-800 text-right">{info}</p>
                  </div>
                  <div className="w-full flex justify-end">
                    <Button onclick={closeModal} type="save">
                      برگشت
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Info;
