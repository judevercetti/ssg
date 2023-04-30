import React from 'react'
import Layout from './Component/Layout'
import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
} from "@material-tailwind/react";

function AboutUs() {
    return (
        <div className='container max-w-screen-xl mx-auto flex flex-col md:flex-row py-16'>
            <div className='md:w-1/2 px-5'>
                <h1 className='text-2xl font-semibold'>ADVERTISE WITH US</h1>
                <div className='flex flex-col space-y-3 border-t-2 pt-5'>
                    <Card color="transparent" shadow={false} className=''>
                        <Typography color="gray" className="mt-1 font-normal">
                            Fill in your details and we will contact you soon.
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                                <Input size="md" label="Name" />
                                <Input size="md" label="Email" />
                                <Input size="md" label="Telephone" />
                                <Textarea size="md" label="Message"  />
                            </div>
                            <Button className="mt-6 bg-primary hover:bg-primary-hover" fullWidth>
                                SEND
                            </Button>
                            <Typography color="gray" className="mt-4 font-normal">
                                South Sudan Global (SSG) is an online news leader focusing on South Sudan, Africa & Beyond.
                            </Typography>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}

AboutUs.layout = page => <Layout children={page} />
export default AboutUs