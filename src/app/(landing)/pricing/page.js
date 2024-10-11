import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'; 
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; 

export default function Pricing() {
    // Temporay Pricing Section maybe changed later
  return (
    <section className="bg-background py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-lg"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          Our Pricing Plans
        </h2>
        <p className='text-center text-muted-foreground text-lg my-10'>
          Choose the plan that best suits your needs and get started with us today!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
          {['Basic', 'Standard', 'Premium'].map((plan, index) => (
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
                  {plan === 'Basic' ? '₹1,500/month' : plan === 'Standard' ? '₹3,800/month' : '₹7,500/month'}
                </p>
                <ul className="mt-6 space-y-4">
                  {plan === 'Basic' && (
                    <>
                      <li className="text-muted-foreground">Access to basic features</li>
                      <li className="text-muted-foreground">Email support</li>
                      <li className="text-muted-foreground">Community access</li>
                    </>
                  )}
                  {plan === 'Standard' && (
                    <>
                      <li className="text-muted-foreground">All features in Basic</li>
                      <li className="text-muted-foreground">Priority support</li>
                      <li className="text-muted-foreground">Advanced analytics</li>
                      <li className="text-muted-foreground">Monthly webinars</li>
                    </>
                  )}
                  {plan === 'Premium' && (
                    <>
                      <li className="text-muted-foreground">All features in Standard</li>
                      <li className="text-muted-foreground">Dedicated account manager</li>
                      <li className="text-muted-foreground">Custom integrations</li>
                      <li className="text-muted-foreground">24/7 support</li>
                      <li className="text-muted-foreground">Exclusive content</li>
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
      </div>
    </section>
  );
}
