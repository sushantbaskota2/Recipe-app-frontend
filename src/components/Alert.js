import './css/Alert.css';

import React from 'react';

const Alert = ({ message, type }) => {
    if (type === 'success') {
        return (
            <div class='col-sm-12' style={{ marginTop: '5%' }}>
                <div class='alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show'>
                    <button
                        style={{ background: 'none', border: 'none' }}
                        type='button'
                        class='close font__size-18'
                        data-dismiss='alert'
                    >
                        <span aria-hidden='true'>
                            <i class='fa fa-times greencross' />
                        </span>
                        <span class='sr-only'>Close</span>
                    </button>
                    <i class='start-icon far fa-check-circle faa-tada animated' />
                    <strong class='font__weight-semibold'>Sucess!</strong> {message}
                </div>
            </div>
        );
    }
    return (
        <div class='col-sm-12' style={{ marginTop: '5%' }}>
            <div class='alert fade alert-simple alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show'>
                <button
                    style={{ background: 'none', border: 'none' }}
                    type='button'
                    class='close font__size-18'
                    data-dismiss='alert'
                >
                    <span aria-hidden='true'>
                        <i class='fa fa-times warning' />
                    </span>
                    <span class='sr-only'>Close</span>
                </button>
                <i class='start-icon far fa-check-circle faa-tada animated' />
                <strong class='font__weight-semibold'>Warning!</strong> {message}
            </div>
        </div>
    );
    return (
        <div>
            <section>
                <div class='square_box box_three' />
                <div class='square_box box_four' />
                <div class='container mt-5'>
                    <div class='row'>
                        <div class='col-sm-12'>
                            <div
                                class='alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show'
                                role='alert'
                                data-brk-library='component__alert'
                            >
                                <button type='button' class='close font__size-18' data-dismiss='alert'>
                                    <span aria-hidden='true'>
                                        <i class='fa fa-times blue-cross' />
                                    </span>
                                    <span class='sr-only'>Close</span>
                                </button>
                                <i class='start-icon  fa fa-info-circle faa-shake animated' />
                                <strong class='font__weight-semibold'>Heads up!</strong> This alert needs your
                                attention, but it's not super important.
                            </div>
                        </div>

                        <div class='col-sm-12'>
                            <div
                                class='alert fade alert-simple alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show'
                                role='alert'
                                data-brk-library='component__alert'
                            >
                                <button type='button' class='close font__size-18' data-dismiss='alert'>
                                    <span aria-hidden='true'>
                                        <i class='fa fa-times warning' />
                                    </span>
                                    <span class='sr-only'>Close</span>
                                </button>
                                <i class='start-icon fa fa-exclamation-triangle faa-flash animated' />
                                <strong class='font__weight-semibold'>Warning!</strong> Better check yourself, you're
                                not looking too good.
                            </div>
                        </div>

                        <div class='col-sm-12'>
                            <div
                                class='alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show'
                                role='alert'
                                data-brk-library='component__alert'
                            >
                                <button type='button' class='close font__size-18' data-dismiss='alert'>
                                    <span aria-hidden='true'>
                                        <i class='fa fa-times danger ' />
                                    </span>
                                    <span class='sr-only'>Close</span>
                                </button>
                                <i class='start-icon far fa-times-circle faa-pulse animated' />
                                <strong class='font__weight-semibold'>Oh snap!</strong> Change a few things up and try
                                submitting again.
                            </div>
                        </div>

                        <div class='col-sm-12'>
                            <div
                                class='alert fade alert-simple alert-primary alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show'
                                role='alert'
                                data-brk-library='component__alert'
                            >
                                <button type='button' class='close font__size-18' data-dismiss='alert'>
                                    <span aria-hidden='true'>
                                        <i class='fa fa-times alertprimary' />
                                    </span>
                                    <span class='sr-only'>Close</span>
                                </button>
                                <i class='start-icon fa fa-thumbs-up faa-bounce animated' />
                                <strong class='font__weight-semibold'>Well done!</strong> You successfullyread this
                                important.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Alert;
