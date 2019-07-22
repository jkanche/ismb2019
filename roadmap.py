from epivizfileserver import setup_app, create_fileHandler, MeasurementManager
import os
import numpy
import pickle

if __name__ == "__main__":
    # create measurements manager
    mMgr = MeasurementManager()

    # create file handler
    mHandler = create_fileHandler()
    
    # import measurements from json
    roadmap = mMgr.import_files(os.getcwd() + "/roadmap.json", mHandler)

    #filter measurements for "H3k4me3"
    froadmap = out = [m for m in roadmap if m.name.find("H3K4me2") != -1 and m.name.find("signal") != -1 ]

    # add a computed measurement
    computed_measurement = mMgr.add_computed_measurement("computed", "diff_H3K4me2_binding", "diff H3K4me2 binding (Gastric & Intestine) ",
                                    measurements=roadmap[6:], computeFunc=numpy.diff)

    app = setup_app(mMgr)
    app.run(host="0.0.0.0", port=8000)
    