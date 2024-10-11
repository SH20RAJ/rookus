import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { JoinWaitList } from '@/components/(Landing)/JoinWaitList';


export default function Pricing() {
    // Temporay Pricing Section maybe changed later
  return (
    <section className="bg-background py-12 relative overflow-hidden">
      {/* Blackish gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          Our Pricing Plans
        </h2>
        <p className='text-center text-muted-foreground text-lg my-10'>
          Choose the plan that best suits your needs and get started with us today!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
          {['Free', 'Standard', 'Premium'].map((plan, index) => (
            <Card
              key={plan}
              className={cn(
                "bg-card p-6 rounded-xl shadow-neomorphism w-full md:w-1/3 mb-6 md:mb-0 hover:shadow-lg transition-shadow duration-300"
              )}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <CardHeader>
                <h3 className="text-xl font-semibold text-card-foreground">{plan}</h3>
              </CardHeader>
              <CardContent>
                <p className="mt-4 text-muted-foreground">
                  {plan === 'Free' ? '₹0/month' : plan === 'Standard' ? '₹1,500/month' : '₹5,000/month'}
                </p>
                <ul className="mt-6 space-y-4">
                  {plan === 'Free' && (
                    <>
                      <li className="text-muted-foreground">Access to all Basic Models for limited use</li>
                      <li className="text-muted-foreground">10 Tokens per week</li>
                      <li className="text-muted-foreground">Limited access to Virtual Try On</li>
                    </>
                  )}
                  {plan === 'Standard' && (
                    <>
                      <li className="text-muted-foreground">Access to all Rookus Models</li>
                      <li className="text-muted-foreground">200 tokens per week</li>
                      <li className="text-muted-foreground">Full access to Virtual Try On</li>
                      <li className="text-muted-foreground">Limited access to Beta Features</li>
                    </>
                  )}
                  {plan === 'Premium' && (
                    <>
                      <li className="text-muted-foreground">Access to all Rookus Models and APIs</li>
                      <li className="text-muted-foreground">1000 Tokens per week</li>
                      <li className="text-muted-foreground">Platform Integratable APIs</li>
                      <li className="text-muted-foreground">Access to all Beta Models</li>
                      <li className="text-muted-foreground">Access to Rookus Design Catalogues</li>
                    </>
                  )}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="mt-6 w-full bg-primary text-primary-foreground py-2 rounded-lg shadow-neomorphism">
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
          <JoinWaitList />
      </div>
    </section>
  );
}
